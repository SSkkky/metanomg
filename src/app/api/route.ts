import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

async function getPokemonData(pokemonName:string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('ㅇㅅㅇ')
    const name = req.nextUrl.searchParams.get('name');
    const data = await getPokemonData(name as string);
    return NextResponse.json(data);
};
