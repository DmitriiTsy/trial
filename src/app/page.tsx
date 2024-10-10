'use client'
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrialList from '../app/components/TrialList';
import { ClinicalTrial } from '../app/components/types/ClinicalTrial';

export default function Home() {
  const [searchResults, setSearchResults] = useState<ClinicalTrial[]>([]);

  console.log(searchResults)
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Clinical Trial Search</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <TrialList trials={searchResults} />
    </main>
  );
}