import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Person } from './page'

export function NewPerson() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Person hinzufügen</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Neue Person</DialogTitle>
            <DialogDescription>
              Hier erklären wir was zu tun ist. Bitte ausfüllen und
              weiterfahren.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              className="rounded block w-full"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <Label htmlFor="age">Alter</Label>
            <Input
              className="rounded block w-full"
              type="number"
              name="age"
              id="age"
            />
          </div>
          <div>
            <Label htmlFor="language">Sprache</Label>
            <Select name="language">
              <SelectTrigger id="language">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DE">Deutsch</SelectItem>
                <SelectItem value="FR">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-right">
            <DialogClose asChild>
              <Button type="button">Weiter</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
