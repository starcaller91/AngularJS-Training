using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Angular.EF.Configuration
{
    public class CategoryMapping
    {
        public CategoryMapping(EntityTypeBuilder<Category> entityBuilder)
        {
            entityBuilder.ToTable("Category");
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Name).IsRequired().HasColumnType("varchar(60)");
        }

    }
}
