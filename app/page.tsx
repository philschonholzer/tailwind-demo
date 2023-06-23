export default function Page() {
  return (
    <main className="max-w-lg mx-auto px-6 w-full space-y-14 py-20">
      <h1 className="text-4xl font-semibold">Tailwind Demo</h1>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold text-brand">Personen</h2>
        <p>Hier die aktuelle Personen </p>

        <div className="flex flex-col gap-2">
          {persons.map((person) => (
            <div
              key={person.name + person.age + person.language}
              className="card"
            >
              <p>{person.name}</p>
              <p>
                Alter <span>{person.age}</span>
              </p>
              <p>{person.language}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold text-brand">Neue Person</h2>
        <p className="">
          Hier erklären wir was zu tun ist. Bitte ausfüllen und weiterfahren.
        </p>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="rounded block w-full"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="age">Alter</label>
          <input
            className="rounded block w-full"
            type="number"
            name="age"
            id="age"
          />
        </div>
        <div>
          <label htmlFor="language">Sprache</label>
          <select
            className="rounded block w-full"
            name="language"
            id="language"
          >
            <option value="DE">Deutsch</option>
            <option value="FR">Français</option>
          </select>
        </div>

        <div className="text-right">
          <button
            className="border-2 text-brand font-bold px-6 py-2 rounded border-brand"
            type="submit"
          >
            Weiter
          </button>
        </div>
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
