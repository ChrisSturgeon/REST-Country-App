import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function () {
  const { country } = useParams();
  return <div>I'm the country component for {country}</div>;
}
