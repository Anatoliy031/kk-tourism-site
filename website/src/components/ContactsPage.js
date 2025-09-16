import React from 'react';
import operators from '../data/operators';
import OperatorCard from './OperatorCard';
import './ContactsPage.css';

/**
 * Contacts page lists all tour operators and official tourism
 * organisations in the region with their contact information.  The
 * page loops through the imported operators dataset and renders a
 * card for each.  At the top of the page a heading introduces the
 * purpose of the section.
 */
export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <h1>Контакты туроператоров и туристических центров</h1>
        <p className="contacts-intro">
          Ниже представлены официальные данные для связи с
          региональными туристическими центрами и ведущими
          туроператорами, предлагающими экскурсии и маршруты по
          Краснодарскому краю. По любым вопросам путешествий
          обращайтесь по телефонам или электронной почте, указанным в
          карточках.
        </p>
        <div className="operators-grid">
          {operators.map((op) => (
            <OperatorCard key={op.id} operator={op} />
          ))}
        </div>
      </div>
    </div>
  );
}