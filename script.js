const vapi = new Vapi("aa8556ed-899a-45ca-be9c-94c6da221858");

const button = document.getElementById("start");

button.onclick = async () => {

    await vapi.start("5cf2c58a-db0c-4430-96a0-ee9f120e7be8");

};
