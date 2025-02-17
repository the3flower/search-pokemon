export default async function SearchPage() {
    const response = await fetch('https://graphql-pokemon2.vercel.app')
    const data = await response.json()
    
    return(
        <ul>
            {data.map((pokemon) => (
                <li key={pokemon.id}>{pokemon.name}</li>
            ))}
        </ul>
    )
}