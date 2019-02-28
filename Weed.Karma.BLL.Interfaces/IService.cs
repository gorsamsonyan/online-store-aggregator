using Weed.Karma.Entities;

namespace Weed.Karma.BLL.Interfaces
{
    /// <summary>
    /// Base Service Interface
    /// </summary>
    public interface IService
    {
    }

    public interface IService<T> : IService
        where T : IEntityBase
    {

    }
}
