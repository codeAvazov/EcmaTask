export const usersData = () => {
    return [
        {id : 1, firstName : 'Ahmad', lastName : 'Jumayev', phone : '+998934614188', isActive : false},
        {id : 2, firstName : 'Asad', lastName : 'Avazov', phone : '+998934614188',  isActive : false},
        {id : 3, firstName : 'Ulugbek', lastName : 'Avazov', phone : '+998934614188',  isActive : false},
        {id : 4, firstName : 'Alisher', lastName : 'Avazov', phone : '+998934614188',  isActive : false},
        {id : 5, firstName : 'Shaxzod', lastName : 'Umurzoqov', phone : '+998934614188',  isActive : false},
        {id : 6, firstName : 'Otabek', lastName : 'Ismoilov', phone : '+998934614188',  isActive : false},
        {id : 7, firstName : 'Ibrohim', lastName : 'Shukurov', phone : '+998934614188',  isActive : false},
        {id : 8, firstName : 'Ahmad', lastName : 'Xojayev', phone : '+998934614188',  isActive : false},
        {id : 9, firstName : 'Jamshid', lastName : 'Suyunov', phone : '+998934614188',  isActive : false},
    ];
};
export const navData = () => {
    return [
        {id : 1, title : 'Dashboard', to : '/dashboard', icon : <i className="ri-bar-chart-box-line"/>},
        {id : 2, title : 'Kurslar', to : '/kurslar', icon : <i className="ri-stack-line"/>},
        {id : 3, title : 'Kanban Boards', to : '/boards', icon : <i className="ri-dashboard-line"/>},
        {id : 4, title : 'Foydalanuvchilar', to : '/', icon : <i className="ri-group-2-line"/>},
        {id : 5, title : 'Student Flow', to : '/studentFlow', icon : <i className="ri-user-search-line"/>},
        {id : 6, title : 'Tadbirlar', to : '/tadbirlar', icon : <i className="ri-calendar-event-line" />},
        {id : 7, title : 'Sozlamalar', to : '/settings', icon : <i className="ri-settings-3-line"/>},
        {id : 8, title : 'Home pdp.uz', to : '/home', icon : <i className="ri-arrow-right-up-line"/>},
        {id : 9, title : 'Chiqish', to : '/exit', icon : <i className="ri-shut-down-line"/>},
    ];
};

export const filterModules = () => {
    return [
        {id : 1, isActive : false, title : 'Balans bo`yicha(o`sish)'},
        {id : 2, isActive : false, title : 'Balans bo`yicha(kamayish)'},
        {id : 3, isActive : false, title : 'Foydalanuvchi(A-Z)'},
        {id : 4, isActive : false, title : 'Foydalanuvchi(Z-A)'},
        {id : 5, isActive : false, title : 'Sana boyicha(o`sish)'},
        {id : 6, isActive : false, title : 'Sana boyicha(kamayish)'},
        {id : 7, isActive : false, title : 'Telegram yo`qlar'},
        {id : 8, isActive : false, title : 'Active talabalar'},
    ];
};

// export const selectModules = () => {
//     return [
//         {id : 1, title : 'Kurs', options : [{id : 1, title : 'Frontend', value : 0},]},
//         {id : 1, title : 'Mudul', options : [{id : 1, title : 1, value : 0},]},
//         {id : 1, title : 'Dars', options : [{id : 1, title : 1, value : 0},]},
//     ]
// } 