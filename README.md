# 📦 Template Orders VTEX – Prueba Técnica

Este proyecto fue desarrollado con el objetivo de consumir múltiples órdenes desde la **API de VTEX** y mostrarlas en una interfaz clara, limpia y responsiva utilizando **React** y **TailwindCSS**.

## 🚀 Tecnologías utilizadas

- **React**
- **Vite**
- **TailwindCSS**
- **VTEX OMS API**
- **Vercel (Deploy)**

## 📄 Descripción del proyecto

El proyecto consiste en la visualización de órdenes provenientes de VTEX, mostrando información relevante como:

- Número de orden  
- Estado y descripción del estado  
- Datos del cliente (nombre, email)  
- Fecha de creación  
- Dirección  
- Total de la orden  
- Lista de productos (nombre, cantidad, imagen)

Cada orden se muestra en una card estilizada y responsiva. 

## 📁 Estructura del proyecto
```
      src/
      ├─ components/
      │   └─ OrderList.jsx
      │   └─ Footer.jsx
      │   └─ Header.jsx
      ├─ data/
      │   └─ ordersIds.js  
      ├─ services/
      │   └─ ordersService.js  
      ├─ utils/
      │   └─ formatCurrency.js
      ├─ App.jsx
      └─ main.jsx
```

## 🔧 Instalación y ejecución

### 1. Clonar el repositorio
```
git clone https://github.com/tu-usuario/template-orders-vtex.git
```

### 2. Instalar dependencias
```
npm install 
```

### 3. Ejecutar el proyecto 
```
npm run dev
```

## 🌐 Deploy

El proyecto fue desplegado en **Vercel**.

🔗 **Demo en producción:** _[[orders](https://template-orders-vtex.vercel.app/)]_  

## ✨ Autor

[Daniela Ducuara Cañas](https://github.com/Daniela1421)

