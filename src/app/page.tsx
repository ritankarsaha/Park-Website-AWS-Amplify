"use client"

import Link from 'next/link'
import { listParks } from "@/graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import amplifyconfig from '../amplifyconfiguration.json';
import { useEffect, useState } from 'react';
Amplify.configure(amplifyconfig);
const client = generateClient();

export default function Home() {
  const [parks, setParks] = useState<{__typename: "Park"; id: string; name: string; createdAt: string; updatedAt: string; }[]>([])
  async function getData() {
    const {data} = await client.graphql({query: listParks})
    setParks(data.listParks.items)
    console.log(data)
  }
  useEffect(()=>{getData()},[])
  return (
    <div className="container">
      <h1> Photos <Link href="/create-park">(Add a Photo)</Link> </h1>

      <div className="img-grid">
        {parks.map(park => (
          <div key={park.id} className="img-square">
            <h2>{park.name}</h2>
            <StorageImage imgKey={park.name} accessLevel='guest' alt={park.name} height="200px" />
          </div>
        ))}
      </div>
    </div>
  );
}
