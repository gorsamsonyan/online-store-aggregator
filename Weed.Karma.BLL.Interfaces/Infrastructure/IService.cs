using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities;

namespace Weed.Karma.BLL.Interfaces.Infrastructure
{
    /// <summary>
    /// Base Service Interface
    /// </summary>
    public interface IService
    {
    }

    /// <summary>
    /// Generic Base Service Interface
    /// </summary>
    /// <typeparam name="T">Entity type inherited to IEntityBase</typeparam>
    public interface IService<T> : IService where T : IEntityBase
    {

    }
}
