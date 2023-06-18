﻿using System.ComponentModel.DataAnnotations;

namespace CodeAcademy.DTO
{
    public class LoginDto
    {

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
