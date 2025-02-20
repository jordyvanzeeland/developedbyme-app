import React, { useEffect, useState } from "react";

const Login = (props) => {
    return(
        <React.Fragment>
            <form>
                <div class="form-group">
                    <label for="username">Gebruikersnaam</label>
                    <input type="username" class="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="password">Wachtwoord</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Inloggen</button>
                </form>
        </React.Fragment>
    )
}

export default Login;