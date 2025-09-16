import React from 'react';
import './OperatorCard.css';

/**
 * Displays a tour operator or tourism organisation with its basic contact
 * information.  Each card shows the name, description, phones, email,
 * address and a link to the operator’s website.  Phone numbers and
 * emails are clickable to initiate calls or compose messages on
 * supported devices.
 */
export default function OperatorCard({ operator }) {
  return (
    <div className="operator-card">
      <h3 className="operator-name">{operator.name}</h3>
      <p className="operator-description">{operator.description}</p>
      <div className="operator-contact">
        {operator.phones && operator.phones.length > 0 && (
          <p>
            Телефон:{' '}
            {operator.phones.map((phone, idx) => (
              <span key={idx}>
                <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                {idx < operator.phones.length - 1 && ', '}
              </span>
            ))}
          </p>
        )}
        {operator.email && (
          <p>
            E‑mail: <a href={`mailto:${operator.email}`}>{operator.email}</a>
          </p>
        )}
        <p>
          Адрес: {operator.address}
        </p>
        {operator.website && (
          <p>
            Сайт:{' '}
            <a href={operator.website} target="_blank" rel="noopener noreferrer">
              {operator.website.replace(/^https?:\/\//, '')}
            </a>
          </p>
        )}
      </div>
      <p className="operator-citation">{operator.citation}</p>
    </div>
  );
}