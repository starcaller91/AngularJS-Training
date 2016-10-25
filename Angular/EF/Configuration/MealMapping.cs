using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.Configuration
{
    public class MealMapping
    {
        public MealMapping(EntityTypeBuilder<Meal> entityBuilder)
        {
            entityBuilder.ToTable("Meal");
            entityBuilder.HasKey(x => x.Id);
            entityBuilder.Property(x => x.Name).IsRequired().HasColumnType("varchar(60)");
            entityBuilder.Property(x => x.Price).IsRequired().HasColumnType("decimal");
            entityBuilder.HasOne(x => x.Category).WithMany();
        }


    }
}
