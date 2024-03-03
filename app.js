import express from "express";
import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createClient(
  "https://yougicpalmyyictzlzdi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdWdpY3BhbG15eWljdHpsemRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NjYwODAsImV4cCI6MjAyNTA0MjA4MH0.pM-QWQK7uZQrdkXLO8JmpH6Fhar9BxdsDyB-z_y4hMs"
);

// GET ROUTES

app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("products").select();
  res.send(data);
});

app.get("/products/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .is("id", req.params.id);
  res.send(data);
});

// POST ROUTES

app.post("/products", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

// PUT ROUTES

app.put("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    })
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("updated!!");
});

// DELETE ROUTES

app.delete("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("deleted!!");
});

// MISC

app.get("/", (req, res) => {
  res.send("Hello I am working my friend Supabase <3");
});

app.get("*", (req, res) => {
  res.send("Hello again I am working my friend to the moon and behind <3");
});

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
