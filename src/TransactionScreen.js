// TransactionScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TransactionScreen.css';

// —————— K‑Means clustering on item prices ——————
function clusterItemsByPrice(items, k = 3, maxIter = 100) {
  const prices = items.map(i => i.price);
  const min = Math.min(...prices), max = Math.max(...prices);
  let centroids = [min, (min + max) / 2, max].slice(0, k);
  let assignments = new Array(items.length).fill(0);

  for (let iter = 0; iter < maxIter; iter++) {
    let moved = false;
    for (let i = 0; i < items.length; i++) {
      const dists = centroids.map(c => Math.abs(items[i].price - c));
      const cluster = dists.indexOf(Math.min(...dists));
      if (cluster !== assignments[i]) {
        assignments[i] = cluster;
        moved = true;
      }
    }
    if (!moved) break;
    for (let c = 0; c < k; c++) {
      const members = items.filter((_, i) => assignments[i] === c);
      if (members.length) {
        centroids[c] = members.reduce((sum, x) => sum + x.price, 0) / members.length;
      }
    }
  }

  const labels = ['cheap', 'medium', 'expensive'];
  const order = centroids
    .map((v, i) => ({ v, i }))
    .sort((a, b) => a.v - b.v)
    .map((o, idx) => ({ idx: o.i, label: labels[idx] }));
  const labelMap = order.reduce((m, o) => { m[o.idx] = o.label; return m; }, {});

  return items.map((item, i) => ({
    ...item,
    priceCategory: labelMap[assignments[i]]
  }));
}

// —————— Apriori association‑rule mining ——————
function getSubsets(arr) {
  return arr.reduce(
    (subs, v) => subs.concat(subs.map(s => s.concat(v))),
    [[]]
  );
}

function apriori(transactions, minSupport = 0.5, minConfidence = 0.7) {
  const n = transactions.length;
  // count single-item support
  const supportCount = {};
  transactions.forEach(tx =>
    new Set(tx).forEach(item => {
      supportCount[item] = (supportCount[item] || 0) + 1;
    })
  );

  // frequent 1-itemsets
  let freqSets = Object.entries(supportCount)
    .filter(([, cnt]) => cnt / n >= minSupport)
    .map(([item]) => [item]);
  const allFreq = [freqSets];

  let k = 2;
  while (freqSets.length) {
    const candidates = [];
    for (let i = 0; i < freqSets.length; i++) {
      for (let j = i + 1; j < freqSets.length; j++) {
        const a = freqSets[i], b = freqSets[j];
        if (a.slice(0, k - 2).join() === b.slice(0, k - 2).join()) {
          const union = [...new Set([...a, ...b])].sort();
          if (union.length === k) candidates.push(union);
        }
      }
    }
    const counts = {};
    candidates.forEach(cand => {
      const key = cand.join(',');
      transactions.forEach(tx => {
        if (cand.every(i => tx.includes(i))) {
          counts[key] = (counts[key] || 0) + 1;
        }
      });
    });
    freqSets = Object.entries(counts)
      .filter(([, cnt]) => cnt / n >= minSupport)
      .map(([key]) => key.split(','));
    if (freqSets.length) allFreq.push(freqSets);
    k++;
  }

  // generate rules
  const rules = [];
  allFreq.slice(1).forEach(level =>
    level.forEach(itemset => {
      const support =
        transactions.filter(tx => itemset.every(i => tx.includes(i))).length / n;
      getSubsets(itemset).forEach(sub => {
        if (!sub.length || sub.length === itemset.length) return;
        const conf =
          support /
          (transactions.filter(tx => sub.every(s => tx.includes(s))).length / n);
        if (conf >= minConfidence) {
          rules.push({
            antecedent: sub,
            consequent: itemset.filter(i => !sub.includes(i)),
            support,
            confidence: conf,
          });
        }
      });
    })
  );

  return rules;
}

export default function TransactionScreen() {
  const navigate = useNavigate();
  const [analysisRan, setAnalysisRan] = useState(false);

  // load saved transactions
  const [transactions] = useState(() => {
    const saved = sessionStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedIdx, setSelectedIdx] = useState(null);

  const calcTotal = items =>
    items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  const canAnalyze = transactions.length >= 5;

  const handleAnalyze = () => {
    // 1) cluster items by price
    const initialItems = JSON.parse(sessionStorage.getItem('shoppingItems') || '[]');
    const clustered = clusterItemsByPrice(initialItems, 3);
    sessionStorage.setItem('priceClusters', JSON.stringify(clustered));

    // 2) run Apriori on transaction item names
    const namesOnly = transactions.map(tx => tx.map(i => i.name));
    const rules = apriori(namesOnly, 0.05, 0.6); // 5% support, 60% confidence
    sessionStorage.setItem('analysis', JSON.stringify({ rules }));

    setAnalysisRan(true);
  };

  return (
    <div className="TransactionScreen">
      <button
        className="BackButton"
        onClick={() => navigate('/DashBoard')}
        style={{ margin: '20px' }}
      >
        ← Back
      </button>

      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>
        All Transactions
      </h2>

      <div
        className="TransactionList"
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '8px',
          margin: '0 auto',
          width: '80%',
          boxSizing: 'border-box'
        }}
      >
        {transactions.length === 0 && (
          <p style={{ textAlign: 'center' }}>No transactions found.</p>
        )}
        {transactions.map((tx, idx) => (
          <div
            key={idx}
            className={`TransactionListItem${idx === selectedIdx ? ' selected' : ''}`}
            onClick={() => setSelectedIdx(idx)}
            style={{
              padding: '8px',
              cursor: 'pointer',
              background: idx === selectedIdx ? '#eef' : 'transparent',
              borderBottom: '1px solid #ddd'
            }}
          >
            Transaction {idx + 1} — ${calcTotal(tx)}
          </div>
        ))}
      </div>

      <button
        className="AnalyzeButton"
        onClick={handleAnalyze}
        disabled={!canAnalyze}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          cursor: canAnalyze ? 'pointer' : 'not-allowed',
          opacity: canAnalyze ? 1 : 0.5
        }}
      >
        Run K‑Means & Apriori
      </button>

      {!canAnalyze && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          Need {5 - transactions.length} more transaction
          {5 - transactions.length > 1 ? 's' : ''} to enable analysis.
        </p>
      )}

      {analysisRan && (
        <button
          className="AnalyzeButton"
          onClick={() => navigate('/Results')}
          style={{
            display: 'block',
            margin: '10px auto',
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          View Results
        </button>
      )}

      {selectedIdx !== null && transactions[selectedIdx] && (
        <div
          className="TransactionDetails"
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            className="Modal"
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '320px',
              maxHeight: '80%',
              overflowY: 'auto',
              boxSizing: 'border-box',
              textAlign: 'left'
            }}
          >
            <h3 style={{ textAlign: 'center', marginTop: 0 }}>
              Transaction {selectedIdx + 1}
            </h3>
            <div className="ItemBreakdown">
              {transactions[selectedIdx].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '4px 0'
                  }}
                >
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                textAlign: 'right'
              }}
            >
              Grand Total: ${calcTotal(transactions[selectedIdx])}
            </div>
            <button
              onClick={() => setSelectedIdx(null)}
              style={{
                marginTop: '20px',
                padding: '8px 16px',
                display: 'block',
                marginLeft: 'auto',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
