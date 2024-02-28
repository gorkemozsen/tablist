"use-strict";

// Tab Buttons
const tab1Btn = document.getElementById("tab1-btn");
const tab2Btn = document.getElementById("tab2-btn");
const tab3Btn = document.getElementById("tab3-btn");

// Tab Descriptons
const tab1Desc = document.getElementById("tab1-desc");
const tab2Desc = document.getElementById("tab2-desc");
const tab3Desc = document.getElementById("tab3-desc");

// Tab Functions
const tab1Opener = () => {
  tab1Desc.classList.remove("hidden");
  tab2Desc.classList.add("hidden");
  tab3Desc.classList.add("hidden");
  tab1Btn.classList.add("active");
  tab2Btn.classList.remove("active");
  tab3Btn.classList.remove("active");
};
const tab2Opener = () => {
  tab2Desc.classList.remove("hidden");
  tab1Desc.classList.add("hidden");
  tab3Desc.classList.add("hidden");
  tab2Btn.classList.add("active");
  tab1Btn.classList.remove("active");
  tab3Btn.classList.remove("active");
};
const tab3Opener = () => {
  tab3Desc.classList.remove("hidden");
  tab1Desc.classList.add("hidden");
  tab2Desc.classList.add("hidden");
  tab3Btn.classList.add("active");
  tab1Btn.classList.remove("active");
  tab2Btn.classList.remove("active");
};

tab1Desc.classList.add("hidden");
tab2Desc.classList.add("hidden");
tab3Desc.classList.add("hidden");

tab1Opener();
