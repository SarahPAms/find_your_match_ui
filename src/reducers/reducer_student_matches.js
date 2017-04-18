export default function() {

  let d = new Date();

  return [
    { name: 'Joe', date: d.setDate(15) },
    { name: 'Sue', date: d.setDate(16)},
    { name: 'Mark', date: d.setDate(17)},
    { name: 'Mary', date: d.setDate(18)},
    { name: 'John', date: d.setDate(19)},
    { name: 'Tom', date: d.setDate(20)},
    { name: 'Will', date: d.setDate(21)},
  ]
}
