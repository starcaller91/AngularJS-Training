using Angular.EF.Configuration;
using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1;

namespace Angular.EF.Context
{
    public class RestourantContext : DbContext
    {
        public RestourantContext()
        {
            Database.EnsureCreated();
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connString = Startup.Configuration["Data:RestourantConnection"];
            optionsBuilder.UseSqlServer(connString);

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new CategoryMapping(modelBuilder.Entity<Category>());
            new MealMapping(modelBuilder.Entity<Meal>());
            new OrderItemMapping(modelBuilder.Entity<OrderItems>());
            new OrderMapping(modelBuilder.Entity<Order>());
            new MenuMapping(modelBuilder.Entity<Menu>());
            new MenuItemMapping(modelBuilder.Entity<MenuItem>());


        }




    }
}
