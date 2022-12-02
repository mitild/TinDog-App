// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
 
  getDogHtml () {
    const {name, avatar, age, bio} = this
    return `
      <div class="img-container" style="background-image: url(./${avatar});">
        <div class="badge" id="badge">
        </div>
          <div class="user-info">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
          </div>
      </div>
    `
  } 
}

export default Dog