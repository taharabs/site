<div align="center">

# 🌐 techbytahar — Portfolio

**Personal portfolio of Mohamed Tahar Ababsa — IT Engineer, Developer & Embedded AI engineer.**

[![Visit](https://img.shields.io/badge/▶%20Visit-techbytahar.vercel.app-6d28d9?style=for-the-badge&logo=vercel&logoColor=white)](https://techbytahar.vercel.app)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## Pages
| Page | Content |
|---|---|
| [`/`](https://techbytahar.vercel.app) | Main portfolio — profile, experience, skills, projects, contact |
| [`/UNet.html`](https://techbytahar.vercel.app/UNet.html) | U-Net retinal segmentation on a PYNQ-Z2 FPGA — project write-up |
| [`/practicalElectronicSkills.html`](https://techbytahar.vercel.app/practicalElectronicSkills.html) | FPGA resource-usage visualisation |
| [`/medicalEquipmentEngineer.html`](https://techbytahar.vercel.app/medicalEquipmentEngineer.html) | Electronics / medical-equipment engineering portfolio |

## Stack
- **Frontend:** HTML5, CSS3, vanilla JavaScript, Font Awesome
- **Backend:** Node.js + Express (static serving + API), Nodemailer for the contact form
- **Hosting:** Vercel (`vercel.json`)

## Run locally
```bash
git clone https://github.com/taharabs/site.git
cd site
npm install
cp .env.example .env     # then fill in your own values
npm run dev              # http://localhost:3000
```

## Environment variables
| Variable | Description |
|---|---|
| `EMAIL_USER` | Gmail address used to send contact-form emails |
| `EMAIL_PASS` | Gmail **app password** (never commit it) |
| `PORT` | Local port, default `3000` |

On Vercel, set these in *Project → Settings → Environment Variables*.

---
© Mohamed Tahar Ababsa
