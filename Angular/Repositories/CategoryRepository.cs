using Angular.EF.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Repositories
{
    public class CategoryRepository
    {
        private RestourantContext context;
        public CategoryRepository(RestourantContext context)
        {
            this.context = context;
        }
    }
}
