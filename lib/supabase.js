const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://yougicpalmyyictzlzdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdWdpY3BhbG15eWljdHpsemRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NjYwODAsImV4cCI6MjAyNTA0MjA4MH0.pM-QWQK7uZQrdkXLO8JmpH6Fhar9BxdsDyB-z_y4hMs";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
