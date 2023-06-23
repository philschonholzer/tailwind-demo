import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { NewPerson } from './new-person'

export default function Page() {
  return (
    <main className="max-w-lg mx-auto px-6 w-full space-y-14 py-20">
      <h1 className="text-4xl font-semibold">Tailwind Demo</h1>

      <section className="space-y-2">
        <div className="flex gap-2 justify-between">
          <h2 className="text-2xl font-bold text-brand">Personen</h2>
          <NewPerson />
        </div>
        <p>Hier die aktuelle Personen </p>

        <div className="flex flex-col gap-2">
          {persons.map((person) => (
            <Card
              key={person.name + person.age + person.language}
              className="card"
            >
              <CardHeader>
                <CardTitle>
                  <p>{person.name}</p>
                </CardTitle>
                <CardDescription>
                  Alter <span>{person.age}</span> {person.language}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export type Person = {
  name: string
  age: number
  language: '🇩🇪' | '🇫🇷'
}

const persons = [
  { name: 'Sonja', age: 33, language: '🇩🇪' },
  { name: 'Natalie', age: 41, language: '🇫🇷' },
  { name: 'Fritz', age: 58, language: '🇩🇪' },
  { name: 'Johan', age: 24, language: '🇫🇷' },
] satisfies Array<Person>
