using Microsoft.EntityFrameworkCore.Migrations;

namespace Weed.Karma.DAL.Migrations
{
    public partial class vnkhsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MainImgSrc",
                table: "BlogPosts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MainImgSrc",
                table: "BlogPosts");
        }
    }
}
