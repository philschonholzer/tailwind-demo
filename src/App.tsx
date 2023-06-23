function App() {
  return (
    <main className="max-w-lg mx-auto px-6 w-full">
      <h1 className="text-4xl font-semibold my-8">Tailwind Demo</h1>

      <section className="space-y-4">
        <h2 className="text-xl brand">Personen</h2>
        <p>Hier die aktuelle Personen </p>

        <div className="flex flex-col gap-2">
          {persons.map((person) => (
            <div className="card">
              <p>{person.name}</p>
              <p>
                Alter <span>{person.age}</span>
              </p>
              <p>{person.language}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Neue Person</h2>
        <p className="">
          Hier erklären wir was zu tun ist. Bitte ausfüllen und weiterfahren.
        </p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">Alter</label>
          <input type="number" name="age" id="age" />
        </div>
        <div>
          <label htmlFor="language">Sprache</label>
          <select name="language" id="language">
            <option value="DE">Deutsch</option>
            <option value="FR">Français</option>
          </select>
        </div>

        <button type="submit">Weiter</button>
      </section>
    </main>
  )
}

const persons = [
  { name: 'Sonja', age: 33, language: '🇩🇪' },
  { name: 'Natalie', age: 41, language: '🇫🇷' },
  { name: 'Fritz', age: 58, language: '🇩🇪' },
  { name: 'Johan', age: 24, language: '🇫🇷' },
] satisfies Array<{ name: string; age: number; language: '🇩🇪' | '🇫🇷' }>

export default App
