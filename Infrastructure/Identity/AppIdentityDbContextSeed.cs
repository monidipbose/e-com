using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Monidip",
                    Email = "monidip.bose@test.com",
                    UserName = "monidip.bose@test.com",
                    PhoneNumber = "9804642559",
                    Address = new Address
                    {
                        FirstName = "Monidip",
                        LastName = "Bose",
                        PhoneNumber = "9804642559",
                        Street = "3no. Chandigarh",
                        City = "Madhyamgram",
                        State = "West Bengal",
                        Country = "India",
                        Pincode = "700130"
                    }
                };

                await userManager.CreateAsync(user, "Test@2020");
            }
        }
    }
}