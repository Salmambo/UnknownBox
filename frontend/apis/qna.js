import { BASE_URL } from "../constants/url.js";

export async function insertQna(formData) {
  try {
    const response = await fetch(`${BASE_URL}/api/qnaboard/`, {
      method: "POST",
      body: formData,
      headers: {
        "X-Access-Token": localStorage.getItem("accessToken")
      }
    });
    return response;
  } catch (err) {
    console.dir(err);
  }
}

export async function updateQna(formData, id) {
  try {
    const response = await fetch(`${BASE_URL}/api/qnaboard/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        "X-Access-Token": localStorage.getItem("accessToken")
      }
    });
    return response;
  } catch (err) {
    console.dir(err);
  }
}

export async function deleteQna(formData, id) {
  try {
    const response = await fetch(`${BASE_URL}/api/qnaboard/${id}`, {
      method: "DELETE",
      body: formData,
      headers: {
        "X-Access-Token": localStorage.getItem("accessToken")
      }
    });
    return response;
  } catch (err) {
    console.dir(err);
  }
}

export async function getQnaList() {
  try {
    const response = await fetch(`${BASE_URL}/api/qnaboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  } catch (err) {
    console.dir(err);
  }
}

export async function getQnaDetail(id, password) {
  try {
    password = encodeURI(password);
    const response = await fetch(
      `${BASE_URL}/api/qnaboard/${id}?password=${password}`,
      {
        method: "GET",
        headers: {
          "X-Access-Token": localStorage.getItem("accessToken")
        }
      }
    );
    return await response.json();
  } catch (err) {
    console.dir(err);
  }
}
