using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Angular.EF.Configuration
{
    public class OrderMapping
    {
        public OrderMapping(EntityTypeBuilder<Order> entityBuilder)
        {
            entityBuilder.ToTable("Order");
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Price).IsRequired().HasColumnType("decimal");
            entityBuilder.Property(x => x.TableNumber).HasColumnType("int").IsRequired();
            entityBuilder.Property(x => x.Status).HasColumnType("int").IsRequired();

            entityBuilder.HasMany(x => x.Items).WithOne().IsRequired();

        }
    }
}
