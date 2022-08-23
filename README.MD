</br>

# Todolist restFul api vanilla node js <img style="margin: 2px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="55" />

### About project

todos api CRUD with http server, This is for learning, not use database!. purposes, In most cases you would use something like Express in a production project.
</br></br>

## Languages & Tools

👉 Nodejs </br>
👉 Nodemon </br>
👉 JSON file for like database</br>
👉 Uuid v4 (generate random Id) </br>
👉 VScode / VScodium </br>
</br>

## Routes

```
GET      /api/todos         [mendapatkan data]
POST     /api/todos         [membuat/menambah]
GET      /api/todos/:id     [mendapatkan data berdasarkan id]
PUT      /api/todos/:id     [mengubah data berdasarkan id]
DELETE   /api/todos/:id     [menghapus data berdasarkan id]
```

## respon success

```
{
  "code": 200,
  "status": "OK",
  "data":  [
    {
      "id": "42e58b57-15ac-47e3-824d-ae658aaa0863",
      "title": "learn express",
      "description": "create restFul api with express js",
      "completed": false,
      "createdAt": "8/22/2022, 8:27:49 PM"
    },
    {
      "id": "c0faa29b-256d-494b-ac9e-cbda90e884f1",
      "title": "learn node js",
      "description": "create restFul api with vannila js",
      "completed": true,
      "createdAt": "8/22/2022, 8:28:12 PM"
    }
  ],
}
```

## Usage

```
# Run in development
npm run dev
yarn run dev
```

---

NOTE: </br>
EN : This project is quite simple, only for the process of supporting learning. <br>
ID : Proyek ini cukup simpel hanya untuk proses menunjang pembelajaran.
