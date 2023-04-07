using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace mission14.Data
{
    public partial class JoelHiltonMovieCollectionContext : DbContext
    {

        public JoelHiltonMovieCollectionContext(DbContextOptions<JoelHiltonMovieCollectionContext> options)
            : base(options) { }

        public DbSet<Movie> Movies { get; set; }

    }

}
