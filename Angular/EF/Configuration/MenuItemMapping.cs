using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Angular.EF.Configuration
{
    public class MenuItemMapping
    {
        public MenuItemMapping(EntityTypeBuilder<MenuItem> entityBuilder)
        {
            entityBuilder.ToTable("MenuItem");
            entityBuilder.HasKey(x => x.id);

            entityBuilder.Property(x => x.Breakfast).IsRequired();
            entityBuilder.Property(x => x.Lunch).IsRequired();
            entityBuilder.Property(x => x.Dinner).IsRequired();

        }
    }
}
