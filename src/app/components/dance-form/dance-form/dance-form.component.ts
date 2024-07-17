import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import DanceDetails from 'src/app/models/dancedetails.model';
import { DanceApiService } from 'src/app/services/dance-api.service';

@Component({
  selector: 'dance-form',
  templateUrl: './dance-form.component.html',
  styleUrl: './dance-form.component.css'
})
export class DanceFormComponent implements OnInit {
  danceForm: FormGroup;
  constructor(private fb: FormBuilder, private danceApi: DanceApiService){
    this.danceForm = this.fb.group({
      dance_count: ['', Validators.required],
      music: ['', Validators.required],
      dance_steps: ['', Validators.required],
      level: ['', Validators.required],
      dance_walls: ['', Validators.required],
      choreographer: ['', Validators.required],
      dance_name: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log("🚀 ~ DanceFormComponent ~ onSubmit ~ this.danceForm:", this.danceForm)
    if (this.danceForm.valid) {
      console.log(this.danceForm.value);
      let newDance = new DanceDetails(
        this.danceApi.generateObjectId(),
        this.danceForm.controls["music"].value?.toLowerCase(),
        this.danceForm.controls["dance_count"].value,
        this.danceForm.controls["dance_name"].value?.toLowerCase(),
        this.danceForm.controls["music"].value,
        this.danceForm.controls["dance_steps"].value,
        this.danceForm.controls["level"].value,
        this.danceForm.controls["dance_walls"].value,
        this.danceForm.controls["choreographer"].value,
        -1,
        this.danceForm.controls["dance_name"].value,
        this.danceForm.controls["choreographer"].value?.toLowerCase(),
        this.danceForm.controls["level"].value?.toLowerCase(),
      );

      this.danceApi.sendEmail(newDance)

    }
  }
}
