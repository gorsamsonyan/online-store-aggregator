using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Infrastructure;
using Weed.Karma.DTO.Configuration;

namespace Weed.Karma.BLL.Interfaces.Core
{
    public interface IConfigurationService : IService
    {
        UserDefaultsDTO UserDefaults();
        LanguageDefaultsDTO LanguageDefaults();
        CurrencyDefaultsDTO CurrencyDefaults();
        AuthOptionsDTO AuthOptions();
        //DimensionDefaults DimensionDefaults();
        //SmtpConfiguration SmtpConfigurations();
        //EmailSender EmailSender();
        //StorageSettings StorageSettings();
    }
}
