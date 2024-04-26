"use client"
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { createPark,updatePark, deletePark } from "@/graphql/mutations";
import {getPark, listParks} from "@/graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../amplifyconfiguration.json';
import './layout.css';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(amplifyconfig);
const client = generateClient();

function NewPark()  {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image)  return
    try {
      const result = await uploadData({
        key: name,
        data: image,
      }).result;
      const Park = await client.graphql({
        query: createPark,
        variables: {
          input: {
            name,
            image: {
              region: amplifyconfig.aws_user_files_s3_bucket_region,
              bucket: amplifyconfig.aws_user_files_s3_bucket,
              key: result.key
            }
          }
        }
      });
      
      console.log('Success',Park);
      alert("Image upload was successful");
    } catch (error) {
      console.error('Error creating park:', error);
    }
    const Park = await client.graphql({ query: listParks });
    console.log(Park);
  };
  

  return (
    <div className="h-screen w-screen flex itens-center justify-center p-12">
      <form onSubmit={handleSubmit} className="w-[500px] max-h-[50vh] bg-slate-800 rounded-lg p-6">
        <h2 className="text-5xl font-bold">Create a Park!</h2>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="enter your park name here" className="w-full" id="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="image" className="w-[calc(100%-20px)] h-12 bg-cyan-800 rounded-lg mt-3 flex items-center justify-center text-3xl font-extrabold border border-blue-800">Upload Image</label>
        <input type="file" className="hidden" name="image" id="image" onChange={e => setImage(e.target.files && e.target.files[0])} />
        <input type="submit" className="mt-6" value="Create" />
      </form>
    </div>
  );
};

export default withAuthenticator(NewPark);