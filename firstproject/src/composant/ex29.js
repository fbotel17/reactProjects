import React from 'react';

function Ex29(){
    const login="Fau aka le BOSS";
    const password="password";
    const User = {
        login : "Fau",
        password : "pass"

    };

    return(
        <div>
            <div>
                Bonjour je suis {login}
            </div>
            
            <div>
                Mon password est {password}
            </div>
            <div>
                Le login de mon objet est {User.login}
            </div>
            <div>
                Le pass de mon objet est {User.password}
            </div>
        </div>
    );
};

export default Ex29;