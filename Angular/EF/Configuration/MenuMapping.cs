using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.Configuration
{
    public class MenuMapping
    {
        public MenuMapping(EntityTypeBuilder<Menu> entityBuilder)
        {
            entityBuilder.ToTable("Menu");
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Day).IsRequired().HasColumnType("int");

            entityBuilder.HasMany(x => x.Items).WithOne().IsRequired();
        }
    }
}
