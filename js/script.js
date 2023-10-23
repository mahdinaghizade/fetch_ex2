let one = document.getElementById("sign_in");
let two = document.getElementById("log_in");
let three = document.getElementById("one");
let four = document.getElementById("two");
let m = document.getElementById("mamad");
let b = document.getElementById("body");
let namekarbari = document.getElementById("Namekarbari");
let password_login = document.getElementById("pass_login");
let Enter = document.getElementById("enter");
let NameSignIn = document.getElementById("name_sign_in");
let NamekarbariSignIn = document.getElementById("namekarbari_sign_in");
let MobileNumber = document.getElementById("mobile_number");
let PasswordSineIn = document.getElementById("password_sine_in");
let RepetPasswordSineIn = document.getElementById("repet_password_sine_in");
let SabtName = document.getElementById("sabtname");
let alert1 = document.getElementById("alert1");
let alert2= document.getElementById("alert2");

let speak = document.getElementById("speak");

//// api fetch for sign_in
SabtName.addEventListener("click", () => {
  let p1 = parseInt(PasswordSineIn.value);
  let p2 = parseInt(RepetPasswordSineIn.value);
  let m = parseInt(MobileNumber.value);
  if (p1 == p2) {
    fetch("http://localhost:3004/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: NameSignIn.value,
        user: NamekarbariSignIn.value,
        phone: MobileNumber.value,
        pass: PasswordSineIn.value,
      }),
    });
  } else {
    alert1.style.display = "block";
    setTimeout(() => {
      alert1.style.display = "none";
    }, 5000);
  }
});

m.addEventListener("click", () => {
  b.classList.toggle("dark");
});

three.addEventListener("click", () => {
  if (one.classList == "active_div") {
  } else {
    two.classList.remove("active_div");
    one.classList.add("active_div");
  }
});

four.addEventListener("click", () => {
  if (two.classList == "active_div") {
  } else {
    one.classList.remove("active_div");
    two.classList.add("active_div");
  }
});

///////log in

Enter.addEventListener("click", async function read() {
  let person = (await fetch("http://localhost:3004/posts")).json();
  let p = person
    .then((r) => {
      for (let i = 0; i <= r.length; i++) {
        if (r[i].user == `${namekarbari.value}`) {
          console.log("ok");
          if (r[i].pass == `${password_login.value}`) {
          console.log("okk");
          alert2.style.display = "block";
            setTimeout(() => {
              alert2.style.display = "none";
            }, 5000);
          } else {
            alert("پسورد شما یافت نشد ");
          }
        }
      }
    })
});
