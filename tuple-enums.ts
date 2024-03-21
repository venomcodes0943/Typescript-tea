// Tuples maintain the order of an array strickly 

let User: [number, string, boolean] = [12, "Haseeb", true]

type myUser = [number, string, string]

let forUser: myUser = [21, "Haseeb", "h@h.com"];

// ==========================================================================================

// Enums

// The oder number will otpmatically increaseing in enums

enum seatChoice {
    firstOne,
    middle,
    thirdOne,
    window
}

const haSeat = seatChoice.window

const enum userRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}


export { }