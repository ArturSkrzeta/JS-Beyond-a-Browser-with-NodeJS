
export async function getAllUsers() {

    const response = await fetch('/users'); //get is by default
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( data)
    })
    return await response.json();
}

export async function deleteUser(userid) {
    const response = await fetch(`/users/` + userid, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    return await response.json();
}
