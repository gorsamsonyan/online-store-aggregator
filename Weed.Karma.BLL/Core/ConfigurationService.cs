using Microsoft.Extensions.Options;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DTO.Configuration;

namespace Weed.Karma.BLL.Core
{
    public class ConfigurationService : IConfigurationService
    {
        private readonly IOptions<AuthOptionsDTO> authOptions;
        private readonly IOptions<CurrencyDefaultsDTO> currencyOptions;
        private readonly IOptions<LanguageDefaultsDTO> languageOptions;
        private readonly IOptions<UserDefaultsDTO> userOptions;

        public ConfigurationService(IOptions<AuthOptionsDTO> authOptions,
            IOptions<CurrencyDefaultsDTO> currencyOptions,
            IOptions<LanguageDefaultsDTO> languageOptions,
            IOptions<UserDefaultsDTO> userOptions)
        {
            this.authOptions = authOptions;
            this.currencyOptions = currencyOptions;
            this.userOptions = userOptions;
            this.languageOptions = languageOptions;
        }
        public AuthOptionsDTO AuthOptions()
        {
            return authOptions.Value;
        }

        public CurrencyDefaultsDTO CurrencyDefaults()
        {
            return currencyOptions.Value;
        }

        public LanguageDefaultsDTO LanguageDefaults()
        {
            return languageOptions.Value;
        }

        public UserDefaultsDTO UserDefaults()
        {
            return userOptions.Value;
        }
    }
}
