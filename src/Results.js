// Results.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Results.css';

export default function Results() {
  const navigate = useNavigate();
  const [clusters, setClusters] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const savedClusters = sessionStorage.getItem('priceClusters');
    if (savedClusters) {
      setClusters(JSON.parse(savedClusters));
    }
    const savedAnalysis = sessionStorage.getItem('analysis');
    if (savedAnalysis) {
      const { rules: storedRules } = JSON.parse(savedAnalysis);
      setRules(storedRules);
    }
  }, []);

  if (!clusters.length) {
    return (
      <div className="ResultsScreen">
        <button
          className="BackButton"
          onClick={() => navigate(-1)}
          style={{ margin: '20px' }}
        >
          ← Back
        </button>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No results found.
        </p>
      </div>
    );
  }

  // Compute top-3 most popular bundles by support
  const comboMap = {};
  rules.forEach(r => {
    const items = [...r.antecedent, ...r.consequent];
    const key = items.slice().sort().join(', ');
    if (!comboMap[key] || r.support > comboMap[key].support) {
      comboMap[key] = { items, support: r.support };
    }
  });
  const topCombos = Object.values(comboMap)
    .sort((a, b) => b.support - a.support)
    .slice(0, 3);

  // Group clustered items by priceCategory
  const groupedClusters = clusters.reduce((acc, item) => {
    (acc[item.priceCategory] ||= []).push(item);
    return acc;
  }, {});

  return (
    <div className="ResultsScreen">
      <button
        className="BackButton"
        onClick={() => navigate(-1)}
        style={{ margin: '20px' }}
      >
        ← Back
      </button>

      <div className="ResultsFlexContainer">
        {/* Bundles */}
        <div className="BundleSection">
          <h2 className="SectionTitle">Most Popular Bundles</h2>
          <ul className="BundleList">
            {topCombos.map((combo, idx) => (
              <li key={idx} className="BundleItem">
                <span className="bundle-items">
                  {combo.items.join(' + ')}
                </span>
                <span
                  className="bundle-support"
                  data-tooltip="This shows how many orders had these items together."
                >
                  {(combo.support * 100).toFixed(1)}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clusters */}
        <div className="ClusterSection">
          <h2 className="SectionTitle">Price Clustering Results</h2>
          {['cheap', 'medium', 'expensive'].map(cat => (
            <details key={cat} className="CategorySection">
              <summary className="CategorySummary">{cat}</summary>
              <ul>
                {groupedClusters[cat]?.map(item => (
                  <li key={item.name}>
                    {item.name} — ${item.price.toFixed(2)}
                  </li>
                )) || <li><em>None</em></li>}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
