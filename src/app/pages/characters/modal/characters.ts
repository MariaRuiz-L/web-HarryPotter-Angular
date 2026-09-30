import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from './character-service';
import { ICharacter } from './character.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [TableModule, ButtonModule, ReactiveFormsModule, SelectModule, InputTextModule],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})

export class Characters implements OnInit {
  charactersService : CharacterService = inject(CharacterService);
  formBuilder: FormBuilder = inject(FormBuilder);
  characters: ICharacter[] = [];
  filterForm!: FormGroup;
  isLoading: boolean = false;

  bloodOptions = [
    {label: 'Sangre pura', value: 'Pure-blood'},
    {label: 'Sangre mestiza', value: 'Half-blood'},
    {label: 'Sangre sucia', value: 'Muggle-born'},
  ];

  houseOptions = [
    {label: 'Gryffindor', value: 'Gryffindor'},
    {label: 'Hufflepuff ', value: 'Hufflepuff'},
    {label: 'Ravenclaw', value: 'Ravenclaw'},
    {label: 'Slytherin', value: 'Slytherin'},
  ]



  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      name_cont: ['',],
      nationality_eq: ['',],
      blood_status_cont: [null],
      house_eq: [null]
    });
    this.search();
  }

  search(): void {
    this.isLoading = true;
    this.charactersService.getCharacters(this.filterForm.value).subscribe({
      next: (res) => {
        this.characters = res.data;
        this.isLoading = false;
      }
    });
  }

  cleanFilter(): void {
    this.filterForm.reset();
    this.search();
  }
}

