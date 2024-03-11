import React from 'react';
export const PersonMainDetails: React.FC<{ person: Person | undefined }> = ({ person }) => {
return  <div>
<p><span className="detail-subtitle">Height:</span> {person?.height}</p>
<p><span className="detail-subtitle">Mass:</span> {person?.mass}</p>
<p><span className="detail-subtitle">Hair Color:</span> {person?.hair_color}</p>
<p><span className="detail-subtitle">Eye Color:</span> {person?.eye_color}</p>
<p><span className="detail-subtitle">Birth Year:</span> {person?.birth_year}</p>
<p><span className="detail-subtitle">Gender:</span> {person?.gender}</p>
</div>
};
export const ShipMainDetails: React.FC<{ ship: Ship | undefined }> = ({ ship}) => {
  return  <div className="ship-details-content">
  <p><span className="detail-subtitle">Manufacturer:</span> {ship?.manufacturer}</p>
  <p><span className="detail-subtitle">Model:</span> {ship?.model}</p>
  <p><span className="detail-subtitle">Class:</span> {ship?.starship_class}</p>
  <p><span className="detail-subtitle">Length:</span> {ship?.length} meters</p>
  <p><span className="detail-subtitle">Crew:</span> {ship?.crew}</p>
  <p><span className="detail-subtitle">Passengers:</span> {ship?.passengers}</p>
  <p><span className="detail-subtitle">Cost in Credits:</span> {ship?.cost_in_credits}</p>
  <p><span className="detail-subtitle">Cargo Capacity:</span> {ship?.cargo_capacity} kg</p>
  <p><span className="detail-subtitle">Consumables:</span> {ship?.consumables}</p>
  <p><span className="detail-subtitle">Hyperdrive Rating:</span> {ship?.hyperdrive_rating}</p>
  <p><span className="detail-subtitle">MGLT:</span> {ship?.MGLT}</p>
</div>
};