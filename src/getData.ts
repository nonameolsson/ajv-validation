import {
  createPersonFromJson,
  isValidPerson,
  Person,
  PersonJson,
} from "./schema";
import { PartialWithNull } from "./utils/types";

const path = "data.json";
async function request(): Promise<any> {
  try {
    const response = await fetch(path);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function loadData(): Promise<Person[]> {
  const data = await request();
  const persons: Person[] = [];

  for (const person of data.people) {
    const personData: PartialWithNull<PersonJson> = {
      country: person.country,
      married: person.married,
      name: person.name,
      numberOfGuests: person.numberOfGuests,
    };

    if (!isValidPerson(personData)) throw new Error("Person is not valid");

    persons.push(createPersonFromJson(personData as PersonJson));
  }
  console.log(persons);

  return persons;
}

export function getPersons(element: HTMLElement, target: HTMLElement) {
  let data;
  const handleClick = async () => {
    element.innerHTML = `Get data`;
    try {
      data = await loadData();
      target.innerHTML = data
        .map((person) => `<li>${JSON.stringify(person)}</li>`)
        .join("");
    } catch (error) {
      target.innerHTML = `<li>${error}</li>`;
      console.error(error);
    }
  };
  element.addEventListener("click", () => handleClick());
}
