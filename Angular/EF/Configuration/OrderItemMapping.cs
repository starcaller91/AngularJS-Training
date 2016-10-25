using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.Configuration
{
    public class OrderItemMapping
    {
        public OrderItemMapping(EntityTypeBuilder<OrderItems> entityBuilder)
        {
            entityBuilder.ToTable("OrderItems");
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Quantity).IsRequired().HasColumnType("decimal");
            entityBuilder.HasOne(x => x.Meal).WithMany().IsRequired();

        }

    }
}
