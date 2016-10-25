using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Repositories
{
    public interface IMenuRepository
    {
        Menu ReturnMenuForDay(int Day);
        void UpdateMenu(Menu menu);
        bool SaveChanges();
    }
}
