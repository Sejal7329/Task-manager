# 📝 Task Manager App

One of the hardest UI problems I solved was implementing smooth drag-and-drop reordering without causing layout shifts. Initially, dragging an item made other elements jump due to DOM reflow, which felt unstable and unpolished.

To fix this, I used a placeholder element that matched the dragged item’s size, keeping the layout intact. Instead of removing the item from the flow completely, I positioned the dragged element absolutely and used transform (translateY) for movement. This avoided layout recalculations and made the interaction feel smooth and responsive.

With more time, I’d refactor the drag logic into a reusable custom hook. Right now, the state and event handling are tightly coupled to the component, so separating them would improve scalability and maintainability.

---

## 🚀 Features

- 🗂️ Edit tasks  
- ❌ Delete tasks  
- ✔️ Mark tasks as completed  
- 📋 View all tasks  
- 🔍 Filter tasks (Completed / Pending)  

---

## 🛠️ Tech Stack

- HTML  
- CSS  
- TypeScript / React.js  

---

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://sejal7329.github.io/Task-manager/