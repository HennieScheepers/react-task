import "bootstrap/dist/css/bootstrap.min.css";
const Register = () => {
  return (
    <form class="container w-50 d-flex flex-column justify-content-center mt-5">
      <h3 class="text-center mb-3">Register</h3>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First Name"
        ></input>
        <label for="firstName">First name</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last Name"
        ></input>
        <label for="lastName">Last name</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email Adress"
          aria-describedby="emailHelp"
        ></input>
        <label for="email" class="form-label">
          Email address
        </label>
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="Username"
          placeholder="Username"
        ></input>
        <label for="username" class="form-label">
          Username
        </label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="dateOfBirth"
          placeholder="Date of birth"
        ></input>
        <label for="dateOfBirth">Date of birth(dd/mm/yyyy)</label>
      </div>

      <div class="form-input mb-3">
        <select class="form-select" aria-label="Select school">
          <option selected>Select your school</option>
          <option value="Hogwarts">Hogwarts</option>
          <option value="Ilvermorny">Ilvermorny</option>
          <option value="Durmstrang">Durmstrang</option>
          <option value="Beauxbatons">Beauxbatons</option>
          <option value="Castelobruxo">Castelobruxo</option>
          <option value="Uagadou">Uagadou</option>
          <option value="Mahoutokoro">Mahoutokoro</option>
        </select>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        ></input>
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Confirm password"
        ></input>
        <label for="confirmPassword" class="form-label">
          Confirm Password
        </label>
      </div>

      <div class="container w-100 d-flex flex-row justify-content-between p-0">
        <button type="submit" class="btn btn-primary w-25">
          Register
        </button>

        <button type="submit" class="btn btn-light w-25 border">
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
