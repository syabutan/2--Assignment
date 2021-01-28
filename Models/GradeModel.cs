using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Models
{
    public class GradeModel
    {
        //Data validation
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between o and 100")]
        public object Assignment { get;set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between o and 100")]
        public int Group { get;set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between o and 100")]
        public int Quizz { get;set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between o and 100")]
        public int Exam { get;set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between o and 100")]
        public int Intex { get;set; }
    }
}
